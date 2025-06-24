package Kim;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Korea {

    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.crex.com");
        System.out.println(driver.getTitle());
        //driver.quit();
    }
}
