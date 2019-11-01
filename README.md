# EnergyAirGameBot

### How To Install

##### Opera & Chrome

 1. Install the extension Tampermonkey
 2. Create a new userscript
 3. adjust the parameter and copy the bot into the main function
 4. type `play();` under the last function (if you don't want to start the game automatically, this step is optional to you)
 5. Reload *game.energy.ch*

##### Include Via Console

 1. Copy the content from `bot.js`
 2. Open your Javascript Console Window
 3. Paste your copied code and press `enter`

### How to play

You can start the bot by typing `play();` into the Console.

### How to adjust the speed

You can adjust the speed of the script by lowering or rising the `speed` variable. 
A higher value means it waits a longer time to complete the next step.

Example:

    speed = 2000; //waiting 2 seconds before the next step
This can be done while the bot is running, to adjust the speed as needed.

### How to change the select mode of the price

For changing the selection of the price you must override the variable `selectMode `.

Set `selectMode = ".tickets";` for selecting the ticket pool.<br>
or<br>
Set `selectMode = ".partner-price"` for selecting the coupon pool.
