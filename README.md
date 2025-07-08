Nyctophile Studios Web Automation Project
Project Overview
This project provides an automated test suite for validating key elements and sections of the Nyctophile Studios official website (https://www.nyctophilestudios.com/). Developed using Playwright, a powerful Node.js library for browser automation, it focuses on verifying the correct display of introductory text, the integrity of images across the website, and the functionality/content of the "About" section. This project showcases modern web automation practices for quality assurance.

Project Goal
The main objectives of this project are to:

Automate navigation to the Nyctophile Studios main page.

Verify that the introductory text on the main page is displayed correctly and as expected.

Perform checks on all images present throughout the website to ensure they are loaded and displayed without issues.

Validate the content and/or functionality of the "About" section of the website.

Demonstrate the practical application of Playwright for robust and efficient web UI testing.

Implement a structured approach using the Page Object Model (POM) for better test maintainability and readability.

Technologies Used
Test Automation Framework: Playwright

Programming Language: TypeScript / JavaScript (Node.js)

Design Pattern: Page Object Model (POM)

Setup and Run Instructions
To set up and run this project locally, follow these steps:

Clone the Repository:

git clone https://github.com/BoraSari/NyctophileGameStudiosAutomationTestWithPlayWright.git
cd NyctophileGameStudiosAutomationTestWithPlayWright

(Note: Replace BoraSari with your actual GitHub username if different. Adjust the repository name if it's different in your actual GitHub setup.)

Install Node.js:
Ensure you have Node.js (which includes npm) installed on your system. You can download it from nodejs.org.

Install Playwright and Dependencies:
Navigate to your project directory and install Playwright. This will also download the necessary browser binaries (Chromium, Firefox, WebKit).

npm install
npx playwright install

(You'll need a package.json file in your project with Playwright listed as a dependency.)

Configure Test Files:
Ensure your test file (YourTestFile.spec.ts or similar) and Page Object Model files (PomPages/MainPage.ts or similar) are correctly structured and imported.

Run the Tests:

npx playwright test

To run tests in a specific browser (e.g., Chrome):

npx playwright test --project=chromium

To open Playwright UI Reporter after tests run:

npx playwright test --ui

To run tests in headless mode (default) or headed mode:

npx playwright test --headed

Test Coverage and Scenarios
This project currently covers the following key scenario for the Nyctophile Studios website:

Nyctophile Studios Web Test:

Description: This test suite performs a comprehensive check of the Nyctophile Studios main website, focusing on core visual and content elements.

Flow:

Navigates to the Nyctophile Studios main page (https://www.nyctophilestudios.com/) before each test.

Calls verifyIntroductionTextDisplayedCorrectly() to assert that the main introductory text element is visible and contains the expected content.

Calls checkingAllImagesOnWebsite() to iterate through and verify the loading and display of all images found on the page.

Calls checkingAboutSection() to interact with and validate the "About" section, which might include verifying text, links, or visual elements within that section.

Screenshots/GIFs
(Lütfen buraya test yürütmesini, doğrulanmış giriş metni, yüklü görseller ve kontrol edilmiş "Hakkında" bölümü ile ana sayfayı gösteren ekran görüntüleri veya GIF'ler ekleyerek projenin işlevselliğini görsel olarak sergileyin.)

License
This project is licensed under the MIT License - see the LICENSE file for details.

Nyctophile Studios Web Otomasyon Projesi
Projeye Genel Bakış
Bu proje, Nyctophile Studios resmi web sitesinin (https://www.nyctophilestudios.com/) temel öğelerini ve bölümlerini doğrulamak için otomatik bir test paketi sunar. Tarayıcı otomasyonu için güçlü bir Node.js kütüphanesi olan Playwright kullanılarak geliştirilmiştir ve giriş metninin doğru görüntülenmesini, web sitesindeki görsellerin bütünlüğünü ve "Hakkında" bölümünün işlevselliğini/içeriğini doğrulamaya odaklanır. Bu proje, kalite güvencesi için modern web otomasyon uygulamalarını sergilemektedir.

Proje Amacı
Bu projenin temel hedefleri şunlardır:

Nyctophile Studios ana sayfasına navigasyonu otomatikleştirmek.

Ana sayfadaki giriş metninin doğru ve beklendiği gibi görüntülendiğini doğrulamak.

Web sitesindeki tüm görsellerin yüklenip sorunsuz görüntülendiğinden emin olmak için kontroller yapmak.

Web sitesinin "Hakkında" bölümünün içeriğini ve/veya işlevselliğini doğrulamak.

Sağlam ve verimli web UI testi için Playwright'ın pratik uygulamasını göstermek.

Daha iyi test bakımı ve okunabilirliği için Page Object Model (POM) kullanarak yapılandırılmış bir yaklaşım uygulamak.

Kullanılan Teknolojiler
Test Otomasyon Çerçevesi: Playwright

Programlama Dili: TypeScript / JavaScript (Node.js)

Tasarım Deseni: Page Object Model (POM)

Kurulum ve Çalıştırma Talimatları
Bu projeyi yerel olarak kurmak ve çalıştırmak için aşağıdaki adımları izleyin:

Depoyu Klonlayın:

git clone https://github.com/BoraSari/NyctophileGameStudiosAutomationTestWithPlayWright.git
cd NyctophileGameStudiosAutomationTestWithPlayWright

(Not: BoraSari yerine gerçek GitHub kullanıcı adınızı yazın. GitHub'daki gerçek kurulumunuz farklıysa depo adını ayarlayın.)

Node.js'i Yükleyin:
Sisteminizde Node.js'in (npm dahil) yüklü olduğundan emin olun. nodejs.org adresinden indirebilirsiniz.

Playwright ve Bağımlılıkları Yükleyin:
Proje dizininize gidin ve Playwright'ı yükleyin. Bu işlem aynı zamanda gerekli tarayıcı ikililerini (Chromium, Firefox, WebKit) de indirecektir.

npm install
npx playwright install

(Projenizde Playwright'ın bağımlılık olarak listelendiği bir package.json dosyası olması gerekmektedir.)

Test Dosyalarını Yapılandırın:
Test dosyanızın (YourTestFile.spec.ts veya benzeri) ve Page Object Model dosyalarınızın (PomPages/MainPage.ts veya benzeri) doğru yapılandırıldığından ve içe aktarıldığından emin olun.

Testleri Çalıştırın:

npx playwright test

Testleri belirli bir tarayıcıda çalıştırmak için (örn: Chrome):

npx playwright test --project=chromium

Testler çalıştıktan sonra Playwright UI Raporlayıcısını açmak için:

npx playwright test --ui

Testleri başsız modda (varsayılan) veya başlıklı modda çalıştırmak için:

npx playwright test --headed

Test Kapsamı ve Senaryoları
Bu proje şu anda Nyctophile Studios web sitesi için aşağıdaki temel senaryoyu kapsamaktadır:

Nyctophile Studios Web Test:

Açıklama: Bu test paketi, Nyctophile Studios ana web sitesinin temel görsel ve içerik öğelerine odaklanarak kapsamlı bir kontrol gerçekleştirir.

Akış:

Her testten önce Nyctophile Studios ana sayfasına (https://www.nyctophilestudios.com/) gider.

Ana giriş metni öğesinin görünür olduğunu ve beklenen içeriği içerdiğini doğrulamak için verifyIntroductionTextDisplayedCorrectly() işlevini çağırır.

Sayfadaki tüm görsellerin yüklenmesini ve görüntülenmesini doğrulamak için checkingAllImagesOnWebsite() işlevini çağırır.

"Hakkında" bölümüyle etkileşime girmek ve onu doğrulamak için checkingAboutSection() işlevini çağırır; bu, o bölümdeki metinleri, bağlantıları veya görsel öğeleri doğrulamayı içerebilir.

Screenshots/GIFs
![image](https://github.com/user-attachments/assets/2e87f4a9-fa5d-4d22-957c-d08d24d28875)


License
This project is licensed under the MIT License - see the LICENSE file for details.
