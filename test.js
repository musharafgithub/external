const { Builder, By, until } = require('selenium-webdriver');
const path = require('path');

(async function testCalculator() {
  // Create driver for Chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Load the local HTML file
    const filePath = `file://${path.resolve(__dirname, 'index.html')}`;
    await driver.get(filePath);

    // Find elements and perform calculation: 7 + 3 = 10
    await driver.findElement(By.xpath("//button[text()='7']")).click();
    await driver.findElement(By.xpath("//button[text()='+']")).click();
    await driver.findElement(By.xpath("//button[text()='3']")).click();
    await driver.findElement(By.xpath("//button[text()='=']")).click();

    // Wait for result and verify
    const display = await driver.findElement(By.id('display'));
    const result = await display.getText();

    if (result === '10') {
      console.log('✅ Test Passed: 7 + 3 = 10');
    } else {
      console.log(`❌ Test Failed: Expected 10 but got ${result}`);
    }

  } catch (err) {
    console.error('❌ Test Error:', err);
  } finally {
    await driver.quit(); // Close the browser
  }
})();
