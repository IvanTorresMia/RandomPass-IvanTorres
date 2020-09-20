# RandomPass-IvanTorres

## Description 
This Homework assignment was focused on Javascripts, with it we created a random password Generator in wich the user clicks a red button located in the midle of the page. Then the user is prompted with questions that help customize his or her password. This Homework assignment really did help me better understand the concepts of JavaScript. I was able to take some of the things that I learned and put them into action block by block. In all honestly this was a very hard homewrk assignment but in the end I felt very accomplished and grateful that I learned so much this week! 

## Technologies
* [JavaScript](https://www.w3schools.com/js/)

## Features
* Screen Shot of Genereated Password.



![Screen-Shot-of-generated-pass](https://github.com/IvanTorresMia/RandomPass-IvanTorres/blob/master/images/gif-homeswork.gif?raw=true)

* This generates code Im especially proud off, making sure that every character the user says "yes" to displays on the password regardless of the amount of characters was challenging but satisfying when it worked. There's two parts to it so I will explaing both

* This code makes two arrays, if the user says yes to one of these it will create one array that has **ALL** characters in the string and another array that only adds **one** character to the array. in other words it assures a "seat at the table" in the final password.

```
 var assuringChoices = [];
  var usersChoices = [];
  if (userUpper) {
    usersChoices = usersChoices.concat(upperCase);
    var randomUpper = Math.floor(Math.random() * upperCase.length);
    assuringChoices += upperCase[randomUpper];
  }
  if (userLower) {
    usersChoices = usersChoices.concat(lowerCase);
    var randomLower = Math.floor(Math.random() * lowerCase.length);
    assuringChoices += lowerCase[randomLower];
  }
  if (userNum) {
    usersChoices = usersChoices.concat(numbers);
    var randomNum = Math.floor(Math.random() * numbers.length);
    assuringChoices += numbers[randomNum];
  }
  if (userSpecial) {
    usersChoices = usersChoices.concat(specialChar);
    var randomSpecial = Math.floor(Math.random() * specialChar.length);
    assuringChoices += specialChar[randomSpecial];
  } 
  ```

* This Code adds the "assured" characters characters to the "final password" 
* Then the loop generates a random password without over doing the password by subtracting the length of our assuredChar array. 

```
 var password1 = "";
  password1 = password1.concat(assuringChoices);
  for (var i = 0; i < passLength - assuringChoices.length; i++) {
    var randomNumber = Math.floor(Math.random() * usersChoices.length);
    password1 += usersChoices[randomNumber];
  }
  ```

* this code was a simplified version to the **Fisher Yates Shuffle** algorithm that my tutor told me to google. Some one in stack overflow posted this so I tried it on my code and it worked! 

```
var password1 = password1.split('').sort(function(){return 0.5-Math.random()}).join('');
```

## Author
Ivan Torres
* [Deployed-Link](https://ivantorresmia.github.io/RandomPass-IvanTorres/)
* [GitHub-Repo](https://github.com/IvanTorresMia/RandomPass-IvanTorres)
* [linkedIn](www.linkedin.com/in/ivan-torres-0828931b2)

## Credits
* Credits for this homework assignment go out to Jerome, Manuel, Kerwin, Roger, and all of my classmates who helped me in study sessions. As well as my tutor who helped me a ton with understanding this homework assignment. 
* [StackOverFlow](https://stackoverflow.com/)


## License]
[MIT](https://choosealicense.com/licenses/mit/#) license 