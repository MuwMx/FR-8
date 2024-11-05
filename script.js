body {
    height: 100vh;
    background: linear-gradient(270deg, #ff69b4, #ba55d3, #6a5acd, #ffcc00);
    background-size: 400% 400%;
    -webkit-animation: AnimationName 15s ease infinite;
    -moz-animation: AnimationName 15s ease infinite;
    animation: AnimationName 15s ease infinite;
}


@-webkit-keyframes AnimationName {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@-moz-keyframes AnimationName {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes AnimationName {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}


body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f8ff;
}

.game-container {
    text-align: center;
    border: 2px solid #008080;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    width: 100%;
    max-width: 400px;
}

.score {
    font-size: 1.5em;
    margin-top: 20px;
    color: #008080;
}

.result {
    font-size: 1.2em;
    margin: 20px 0;
}

button:hover{
	background-position: 100% 0;
  	box-shadow: 0 4px 15px 0 rgba(72, 83, 97, 0.75);
    transition: all .4s ease-in-out;
}

button {
   width: 130px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    height: 35px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 10px;
   background-image: linear-gradient(to right, #364a61, #4279b5, #54a3d8, #7663b9); 
    transition: all .4s ease-in-out;
    display: block; 
    margin: 0 auto; 
}


