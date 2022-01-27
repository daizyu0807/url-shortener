
# **url-shortener**

![GITHUB](https://github.com/daizyu0807/url-shortener/blob/8754326077b245fe0ff4e352e0e5e2dff30bc5cf/shortenerUrl.jpg "Cover")

Use a web application to provide URL shortening services.

## **Getting Start**

### **Environment Setup**

* Node.js v14.16.0

* MongoDB v6.1.7

### **Installing**

1. Check requirement for environment setup.

2. Open your terminal and use 'git clone' to copy this project to local.

```
$ git clone https://github.com/daizyu0807/url-shortener.git
```

3. Connect MongoDB server.

```
$ cd ~/mongodb/bin/
```
```
$ ./mongod --dbpath /Users/[Users'name]/mongodb-data
```

4. Change directory to the project.

```
$ cd url-shortener
```

5. Install all dependencies.

```
npm install
```

6. Install nodemon package.

```
npm install -g nodemon 
```

7. Run server in localhost using following npm script.

```
npm run dev
```

9. If successful, `url-shortener is running on http://localhost:3000
mongodb connected` will appear in your terminal and you can open this URL to use the web application.


## **Devtools**

* Node.js 14.16.0

* Express 4.17.2

* Express-Handlebars ^6.0.2

* Bootstrap 5.1.3

* mongoose 6.1.7 
