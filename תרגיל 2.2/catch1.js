function shopping(list1,list2){
    return new Promise((resolve,rejet)=>{
        if (list1.length!=list2.length)
        {
            rejet("you forgot some products");
            return;
        }
        for(let i=0;i<list1.length;i++)
        {
            if(!list2.includes(list1[i]))
            {
                rejet("you forgot some products");
                return;
            }
        }
        resolve("good work");
    }
    
    )};