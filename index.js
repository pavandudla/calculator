//functions

/*function fun()
	{
		return "Hi pavan how are you ?" 
	}
	document.write (fun())
	*/
	/*function test()
	{
		console.log("Hi vinay how do you do ?")
		document.write("Hi vinay how do you do ?")
		window.alert("Hi vinay how do you do ?")
	}
	test()*/
	/*function test1(name)
	{
		document.write("Hi vinay how do you do ?")
	}
	test1("adhwik")*/

	//Arrow Function

	/*let mul=(x,y)=>{
		return x*y
	}
	document.write(mul(2,3))*/
  
	let sum=(a,b)=>{
		return a+b
	}

	 //synchronization problem

	
	// 	let a=prompt("Enter your name")
	// 	let b=prompt("Enter your surname")
	// 	let c=prompt("Enter your phone number")
	


	//Asynchronization problem

	// setTimeout(function(){
	// 	document.write("hey I am good")
	// 	},5000
	// )

	//callbacks

	// function step1(value,callback){
	// 	callback(value+10,false);
	// }

	// function step2(value,callback){
	// 	callback(value+10,false);
	// }

	// function step3(value,callback){
	// 	callback(value+10,false);
	// }

 //   step1(10,function(result1,error){
 //   		if(!error){
 //   			step2(result1,function(result2,error){
 //   				if(!error){
 //   					step3(result2,function(result,error){
 //                        if(!error){
 //                        	document.write("The result of callback values is :",result)
 //                        }
 //   					})
 //   				}
 //   			})
 //   		}

 //   })

   //promises

   //function step1(value,error){
   	// return new promise(resolve,reject)
   //}

   //Error handling


   // setTimeout(()=>
   // {
   // 	console.log("This is error handling...\t")
   // },1000 
   // 	)
   // try{
   // 	console.log(pavan)
   // }
   // catch(error)
   // {
   // 	console.log(error)
   // }
   
   // setTimeout(()=>
   // {
   // 	console.log("This is error handling1...\n")
   // },2000
   // 	)

   // setTimeout(()=>
   // {
   // 	console.log("This is error handling2...\n")
   // },3000
   // 	)

   // setTimeout(()=>
   // {
   // 	console.log("This is error handling3...\n")
   // },4000
   // 	)

// error object and custom error

/*setTimeout(()=>
   {
   	console.log("This is error handling...\t")
   },1000 
   	)
   try{
   	console.log(pavan)
   }
   catch(error)
   {
   	console.log(error.name)
   	console.log(error.message)
   	console.log(error.stack)
   }
   
   setTimeout(()=>
   {
   	console.log("This is error handling with name and message1...\n")
   },2000
   	)

   setTimeout(()=>
   {
   	console.log("This is error handling with name and message2...\n")
   },3000
   	)

   setTimeout(()=>
   {
   	console.log("This is error handling with name and message3...\n")
   },4000
   	)*/

   // try
   // {
   // 	let age=prompt("Enter your age ")
   // 	age=Number.parseInt(age)
   // 	if (age>150)
   // 	{
   // 		throw new ReferenceError("this is probably not true")
   // 	}
   // }
   // catch(error)
   // {
   // 	console.log(error.name)
   // 	console.log(error.message)
   // 	console.log(error.stack)
   // }
   // console.log("the script is still running")


   //finally block in error handling
   
   /*try{
   let a=10/9
  
    console.log(a)
      }
   catch(SyntaxError)
   {
   	console.log(error.name)
   
   }
   finally
   {
   	console.log("finally block will execute")
   }*/

   //Api calls


   /*let p=fetch("http://goweather.herokuapp.com/weather/hyderabad")
   p.then((value1)=>{
   		console.log(value1.status)
   		console.log(value1.ok)
   		return value1.json()
   })
   .then((value2)=>{
   		console.log(value2)
   })*/

   //object oriented program

   //classes and object

   /*class RailwayForm
   {
   	
   	submit()
   	{
   		console.log("\nsubmited sucessfully\t \n")
   	}
   	cancel()
   	{
   		console.log(this.name+"\tForm is canceled")
   	}
   	fill(givenname)
   	{
      this.name=givenname
   	}

   }
   	let pavanform=new RailwayForm()
   	pavanform.fill("pavan")
   	let vinayform=new RailwayForm()
   	pavanform.submit()
   	vinayform.submit()
   	pavanform.cancel()
*/

//constructor in javascript

   	/*class RailwayForm
   {
   	constructor(givenname,trainno)
   	{
   		console.log("CONSTRUCTOR CALLED..."+givenname+" "+trainno)
   		this.name=givenname
   		this.trainno=trainno
   	}
   	submit()
   	{
   		console.log(this.name:+"your submited sucessfully with train no:"+this.trainno)
   	}
   	cancel()
   	{
   		console.log(this.name+"\tForm is canceled")
   	}
   

   }
   	let pavanform=new RailwayForm("pavan",12345)
   	
   	let vinayform=new RailwayForm("vinay",56789)
   	let adhwikform=new RailwayForm("adhwik",345678)
   	pavanform.submit()
   	vinayform.submit()
   	pavanform.cancel()
*/

//Inheritence in javascript

/*class Animal
{
	run()
	{
		console.log("Animal will run...")
	}
	shout()
	{
		console.log("Animal will shout...")
	}
}
class Monkey extends Animal
{
	eat()
	{
		console.log("Monkey will eat...")
	}

}
let obj=new Monkey()
	obj.eat()
	obj.run()
	obj.shout()
*/

//method overriding in javascript

/*class Ravindher
{
 college(leaves)
 {
 	console.log('degree implementation')
 }
}
class Pavan extends Ravindher
{
	college(leaves)
	{
		console.log('B.Tech implementation')
	}
}
let obj=new Ravindher()
obj.college()
*/

//super method in javascript

/*class Ravindher
{
	
 collage(leaves)
 {

 	console.log('degree implementation')
 }
}
class Pavan extends Ravindher
{
	
	collage(leaves)
	{
		
		super.collage()
		console.log('B.Tech implementation')
	}
}
let obj=new Pavan()
obj.collage()
*/

//getter and setter and instance of operator in javawcript

/*class Animal
{
	constructor(name)
	{
		return this._name=name
	}
	fly()
	{
       alert("hi pavan")
	}
	get name()
	{
		return this._name
	}
	set name(newName)
	{
		 this._name=newName
	}
}
let a=new Animal("tiger")
a.fly()
console.log(a.name)
a.name="jack"
console.log(a.name)
*/

//local,global and function scope

//block level scope

// {
// 	let a=10 //let is block level scope we can update but not reinitilize
// }
// console.log(a)

// {
// 	var b=30
// }
// console.log(b)

//function level scope
/*function m1()
{
	var a=20
	var b=20
	console.log(a+b)
}
m1()
*/

//global level scope
 /*var c=50
function m1()
{
	var a=20
	var b=20
	
	console.log(a+b+c)
}
m1()

function m2()
{
	
	var a=30
	var b=20
	console.log(a+b+c)
}
m2()
*/

//Alaram in javascript

// function play(){
// 	var audio=new Audio('http://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
// 	audio.play();
// }
// setTimeout(()=>{
// 	play()
// },3000)
hello("vinay")
function hello(name)
{
	console.log(name+"hi pavan")
}
