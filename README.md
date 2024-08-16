<!-- 
    Tran Nguyen
    June 20,2023
 -->
<!-- <!DOCTYPE html> -->
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tran Nguyen's Portfolio</title>
    <style>
        body 
        {
            background: linear-gradient(to bottom right, gray, rgb(0, 0, 0), violet);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 20px;
            margin-left: 300px;
            margin-right: 300px;
            color: white;
		}
        a, p
        {
            color: gray;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
        nav 
        {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80px;
			margin-top: 20px;
            margin-bottom: 20px;
		}
		nav a 
        {
            height: 45px;
            width: 110px;
			display: inline-block;
			color: white;
			text-align: center;
			padding: 10px;
			text-decoration: none;
			border: 3px solid rgb(255, 255, 255);
			margin-right: 10px;
			background-position: bottom;
		}
        .center
        {
            text-align: center;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        .image {
  			position: absolute;
  			top: 50px;
  			right: 140px;
  			border: 2px dashed #f47309;
  			background-color: #f7f7f7;
  			padding: 5px;
  			box-shadow: 2px 2px 5px rgba(24, 31, 239, 0.3);
			width: 180px;
			height: 181px;
			color:rgba(24, 31, 239, 0.3);
		}
    </style>
</head>
<body>
    
    <header>
        <p class= 'center' style="font-size: 45px; color: #f7f7f7; font-weight: 500;">Hello, I'm Tran Nguyen!</p>
        <p class= 'center' style="font-size: 35px; color: #f7f7f7; font-weight: 500;">Welcome to my portfolio!</p>
        <!-- <h1 class = "center" >Hello, I'm Tran Nguyen!</h1>
        <h2 class = "center" >Welcome to my portfolio!</h2> -->
        <!-- Add your navigation menu here -->
        <!--<div class="image">
            <img src="myimage.jpg" alt="My Picture">
        </div>-->
        <nav>
            <a href="https://www.linkedin.com/in/tran-nguyen-667853258/"><span class="icon"></span>LinkedIn</a>
            <a href="https://drive.google.com/file/d/1ys7sWXvTsdLiNUSx6mVIRfYUCeVQxVDk/view?usp=sharing"><span class="icon"></span>Resume</a>
            <a href="mailto: ntran.nguyen23@gmail.com"><span class="icon"></span>Contact Me</a>
        </nav>
    </header>


    <section id="about">
            
            <img src="myimage.jpg" alt="My Picture" class="center">
            <h2>About Me</h2>
            <P> Greetings, I'm Tran Nguyen, currently in my third year pursuing a major in Computer Science at California State 
                University Long Beach. What truly ignites my enthusiasm is the intersection of technology and intelligence, 
                particularly in the realms of robotics and artificial intelligence. As I immerse myself in the world of coding 
                and computational thinking, I'm on a quest to unravel the complexities of these cutting-edge fields. My journey 
                at CSU Long Beach is not just an academic pursuit; it's a passionate exploration of how computer science can 
                revolutionize and redefine our future.
            </P>
            
               

    </section>
    <section id="contact">
        <h2>Contact Me</h2> 
        <a href = "tel:+17142344056"> (714) 234-4056 </a>
        <br>
        <br>
        <a href = "mailto: ntran.nguyen23@gmail.com" >ntran.nguyen23@gmail.com </a>
    </section>
    

    <footer>
        <p>&copy; 2023 Tran Nguyen. All rights reserved.</p>
    </footer>
</body>
