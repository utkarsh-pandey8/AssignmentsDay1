function typeOfVariable(a)
{
    if(typeof a == "number")
        document.write(a+" is a number")
    else
        document.write(a+" is not a number but a "+typeof a)
}

// typeOfVariable(2)