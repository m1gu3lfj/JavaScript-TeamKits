function kitsValidator(kit1, kit2){
    //Same main colour shirt 
    if (kit1.shirtmain == kit2.shirtmain){
        return false;
    }
    //Same stripe colour shirt
    if (kit1.shirtmain == kit2.shirtsecondary){
        return false;
    }
    //Same stripe colour shirt 
    if (kit1.shirtsecondary == kit2.shirtmain){
        return false;
    }
    //Same colour shorts
    if (kit1.shorts == kit2.shorts){
        return false;
    }
    //Dark colour shorts
    if ((kit1.shorts >= 6) && (kit2.shorts >= 6)){
        return false;
    }
    return true;
}
