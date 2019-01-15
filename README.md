# React.js / Codeigniter starter kit :computer:

### Version
1.0.0

## Usage

> **There are 3 crucial steps to configure this starter kit.** :red_circle:

### Step (1/3)


Go to **front-end** :file_folder: folder, and install the dependencies

```sh
$ npm install
```

### Step (2/3)


Go to **back-end** :file_folder: folder, and configure following files:

- application/config/config.php
  - find a **_base_url_** config and put your website's url here. 
- application/config/database.php
  - at the **_bottom_** of the file you'll find a huge array of settings for your database with my comments to configure.
- application/controllers/React_view.php
  - this is your **_main controller_** that loads the first view which has all your React logic
- application/models/Your_model.php
  - this is your **_model_** which gets data from your database and responds to request form the **_React_view_** controller , feel free to change file's name and inner logic.


### Step (3/3)

Start your server, and go back to **fron-end** :file_folder: folder and run the app with:

```sh
$ npm run-script watch
```

> *This command will watch for any change to be made, and rebuild the project putting the bundle.js file into the back-end/assets/react-files :file_folder: folder*

created by [@elddiablo](https://github.com/elddiablo)
