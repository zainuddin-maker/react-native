## REACT NATIVE 

react native bersifat `cross platform` artinya dapat membuat applikasi di berbagai flatform (mobile apps)

Native artinya adalah aplikasi mobile yang dibuat khusus untuk sistem operasi tertentu, misalnya Android atau iOS. 

> note : Perbedaan Native, Hybrid, dan Web 

>Native adalah aplikasi yang dibangun khusus untuk platform tertentu.Aplikasi hybrid justru bisa digunakan di berbagai platform. Baik itu Android, iOS, maupun Windows. Aplikasi hybrid ini juga sebenarnya merupakan aplikasi web yang diubah menjadi kode native menggunakan bantuan Software Development Kit (SDK) Native, sehingga bisa digunakan di perangkat mobile. Aplikasi web adalah aplikasi yang diakses melalui browser menggunakan koneksi internet. 

Cara kerja react native

![Chat Preview](https://github.com/zainuddin-maker/react-native/blob/master/carakerja.jpg?raw=true)

Cara Kerja React Native cukup simple, yaitu:

- Developer menggunakan kode React untuk membangun interface aplikasi;
- Kode React akan diinterpretasikan menjadi JavaScript agar nantinya bisa digunakan untuk aplikasi mobile;
- React Native akan menggunakan fitur bridge untuk mengolah codebase menjadi Native Module (Android Module, iOS Module);
- Native Module siap digunakan di platform yang bersangkutan.

React Native tetap memiliki pro dan kontra.

![Chat Preview](https://github.com/zainuddin-maker/react-native/blob/master/proandkontra.PNG?raw=true)


Environtment yang dibutuhkan 
- node js 
- git 
- android studio
- Xcode ( harus di MacOS)
- text editor ( Visual Studio Code)

there are 2 ways to build react native :

1. Using Expo Go , untuk pemula atau applikasi yang tidak rumut .
2. React Native CLI jika kita mmebuat aplikasi yang lumayan ribet.

untuk REact Native CLI jika menggunakan MacOS maka dapat menggunakan OS Android maupun iOS jika kita menggunakan windows mauun Linux maka hanya dapat ke Android saja .

https://www.youtube.com/@WahidevAcademy


Setting up for android in windows 

- Install Chocolate - go to https://chocolatey.org/ , and click "Get Started" , scroll down to bottom click "Read he Installations Docs" , find Install with cmd.exe thereis text like :

    ```
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    ```
- run `choco install -y nodejs-lts microsoft-openjdk11`
make sure it is Node 14 or newer
- Install Android Studio , make sure : 
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device 
  - If you are not already using Hyper-V: Performance (Intel ® HAXM) (See here for AMD or Hyper-V)

- Install the Android SDK
  - To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".
  - Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 12 (S) entry, then make sure the following items are checked:
    - Android SDK Platform 31
    - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
  -  select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 31.0.0 is selected.
  - click "Apply" to download and install the Android SDK and related build tools.

- Configure the ANDROID_HOME environment variable.
   -  Open the `Windows Control Panel`.
   -  Click on `User Accounts`, then click `User Accounts` again
   - Click on `Change my environment variables`
   - Click on `New...` to create a new ANDROID_HOME user variable that points to the path to your Android SDK:

        ![Chat Preview](data:image/png;base64,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)

- to ensure the new environment variable is loaded before proceeding to the next step.
   - Open powershell
   - Copy and paste Get-ChildItem -Path Env:\ into powershell
   - Verify ANDROID_HOME has been added

- Add platform-tools to Path
  - Open the `Windows Control Panel`.
  - Click on `User Accounts`, then click `User Accounts` again
  - Click on `Change my environment variables`
  - Select the `Path` variable.
  - Click `Edit`.
  - Click `New` and add the path to platform-tools to the list.

  default location `platform-tools`
  ```
  %LOCALAPPDATA%\Android\Sdk\platform-tools
  ```


  ## Creating a new application

- `npm uninstall -g react-native-cli @react-native-community/cli` if install react-native-cli before .

- `npx react-native@latest init AwesomeProject` , to best experiense , install `yarn` . optional :
    ```
    npx react-native@X.XX.X init AwesomeProject --version X.XX.X
    ```

- Preparing the Android device 
  - Using a physical device.

    If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions: https://reactnative.dev/docs/running-on-device
  - Using a virtual device . 
    
    If you have recently installed Android Studio, you will likely need to create a new AVD. Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the S API Level 31 (or lower) image. Click "Next" then "Finish" to create your AVD.


## Running your React Native application

- Start Metro

    First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."

    run `npx react-native start` inside React Native project.

    If you're familiar with web development, Metro is a lot like webpack—for React Native apps.

- Start your application

    Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:
    ```
    npx react-native run-android
    ```
- if everything is set up correctly, you should see your new app running in your Android emulator shortly.



![Chat Preview](https://reactnative.dev/assets/images/GettingStartedAndroidSuccessWindows-7ae949ba8187936ba342678c432d78f6.png)



![Chat Preview](https://github.com/zainuddin-maker/react-native/blob/master/carakerja.jpg?raw=true)



in folder `ProjctName1`
`devDependencies` digunakan untuk developmentnya saja.

`eslintrc.js` dan `prettier` digunakan untuk merapikan dan menampilkan error pada code .

---
### Basic Componnents React Native

- View -> (like div) membungkus seusatu dan dapat diberikan style.

- Text -> A commponent for displaying text.

- Image -> A component for displaying images 

- TextInput -> A component for inputting text into the app via a keyboard.

- ScroolView -> unutk menanmbahkan scrool pada beberapa view .

- StyleSheet -> Provide an abstraction layer similar to CSS stylesheet.

we can make components using either classes or functions.

Before the introduction of Hooks in React, functional component were called stateless components and were behind class components on feature basis. After the introduction of Hooks, functional component are equivalent to class component

different between class component and function component : 

- syntax -  Just like their names, a functional component is just a plain javascript function that returns JSX (javascript xml). A class component is a javascript class that extends React.Component which has a render method.

- Handling props - Props provided as argument to the functional component and can be directly use inside HTML element. While in the class components, props are handled in a different way. **`this`** keyword is used while using props inside HTML element.

- Handling state - Functional component use React Hooks to handle state. It uses useState hook to set the state of a variable inside the component. Since useState hook returns an array of two items, first item contains the current state, and the second item is a function to update the state. In the Class components, state can be defined as an object outside the render method. It can also be defined inside constructor using this keyword. We can read state using this.state.property_name. And state can be updated using this.setState function. If we are defining state inside constructor, for updating state, we need to first bind the function to this keyword, only then we’ll be able to use setState function to update state.


---
## Import And Export

perbedaan antara export default dan export biasa ,

export default menggunakan sintak 
```
export default somefunction
```
dan berada di akhir code.
sedangkan export biasa  tulisan export berada di awal fungsi yang mau di export contohnya :
```
export sum()
```

dan pada pemaikain import berbeda , jika pakek export default maka pemanggilan import tanpa `{}` jika export biasa pakai `{}`

--- 
## Flex Box

```
flex : 1
```

digunakan untuk menjadikan widht view memenuhi sampai akhir dari phone.

namun jika kita jadi kan row , maka pembagian nya berdasarkan flex , jika terdpat 3 item dengan masing masing flex nya adalah , 1 , 2,3 maka pembagian widht nya adalah 1/6 ,2/6,3/6 .

kita bisa menggunakan alignitem and justifycontent

--- 
## position 

positon absolte untuk child ,
potition relative untuk parent

---
## Lifecycle Class Component

>menggunakan debugger 
cntrl M di applikasi lalu klik debug , dan inspect element.

3 lifecycle utama :
- Mounting
- Updating 
- Unmounting



