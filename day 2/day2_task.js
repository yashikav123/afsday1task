let day=29;
let month=2;
let year = 1900;
if(month<1 || month>12)
{
  console.log("invalid month");
}
else if(month==2)
{
    if(year%4==0 && year % 100 !=0 ||year%400==0)
    {
        if(day>29)
        {
            console.log("Invalid");

        }
        else{
            console.log("valid");
        }
    }
    else
    {
        if(day>28)
            {
                console.log("Invalid ");
            }
            else
            {
                console.log("valid");
            }
    }
}
else if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)
{
    if(day>31)
    {
        console.log("Invalid ");
    }
    else{
        console.log("valid ");
    }
}
else{
    if(day>30)
    {
        console.log("Invalid");
    }
    else{
        console.log("valid");
    }
}
