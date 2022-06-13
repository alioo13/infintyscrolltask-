## Questions from the coding exercise

1. Inside of the product component, do you think that it is viable to create other inner / dumb components? What strategy would you use to break down the product component? 

in the  product component i only creat single commponent and use it inside the main app js file  to break dwon the product component i firstly grap the date from the json file and show it  inside  the render methode and after  map the data i want to show  i crate use effect methode to handle side effects actions i also limit the numbers of date using the limitation of number of page   and then i use intersection observe methode to load more data when the user scroll down  and the data  will load automaticly even when you map all the date  and also there is a loading sîner and button to click it when u reach the bottom of the page 


2. For loading the bank logo. There is a SVG file (sprite-bank.svg) and css available to use. This approach is using sprites. In your opinion, is this a good strategy to deal with the logos? If not, what how would be a better way to handle it?

to handel the logo i use the tag img and load the svg file with src and using the class name to attche ths css file of svg also i need to change the svg url in the css file classes 


3. Considering the user experience, when loading data, a common practice is to use a skeleton screen. Have you already use it? What do you think about it?

Skeleton screens , when used to indicate that a screen is loading, are perceived as being shorter in duration when compared against a blank screen
so its preferly to use it but it should not block the visial and load directly wehn the data is ready to append in the screen  
