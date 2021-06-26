class Date_and_Time{
    today
    day
    dayList
    monthList
    date
    year
    hour
    minute
    second 
    am_pm
    initializeValue(){
        this.today=new Date()
        this.day =this.today.getDay()//5
        this.dayList=["sunday","Monday","Tuesday","Wednesday","Thursday",
    "Friday","Saturday"]
    this.monthList=["Jan","Feb","Mar","Apr","May","June","July","Aug"
,"sep","Oct","Nov","Dec"]
this.month=this.monthList[this.today.getMonth()]//5
this.date=this.today.getUTCDate()//25
this.year=this.today.getUTCFullYear()//2021
this.hour=this.today.getHours()//13
this.minute=this.today.getMinutes()//33
this.second=this.today.getSeconds()//53
this.am_pm=this.hour > 12 ? "PM":"AM"

 }
    displayCurrentDate(){
       document.getElementById('date').textContent=`${this.dayList[this.day]}
       , ${this.month} , ${this.date} , ${this.year}`


    }
    takeTwelve(val){
        if (val >12){
            return val-12
        }else{
            return val
        }


    }
    addZero(val){
        if(val <10){
            return `0${val}`
        }else{
            return val
        }


    }
    displayCurrentTime(){
        document.getElementById('time').textContent=`current Time=${this.addZero(this.takeTwelve(this.hour))}:
        ${this.addZero(this.minute)}:${this.addZero(this.second)} ${this.am_pm}`

    }


}
const Current_Date_Time= new Date_and_Time();


document.getElementsByTagName("button")[0].addEventListener('click',()=>{
    Current_Date_Time.initializeValue()
    Current_Date_Time.displayCurrentDate()
    Current_Date_Time.displayCurrentTime()
setInterval(() =>{
    Current_Date_Time.initializeValue()
    Current_Date_Time.displayCurrentDate()
    Current_Date_Time.displayCurrentTime()
},1000)


})