let nums = [-1,7,-3,-4,3,5];
let flag =false;
let arr=[];
for(let i=0;i<nums.length;i++)
{
    for(let j=i+1;j<nums.length;j++)
    {
        if(nums[i]===-nums[j])
        {
           flag=true;
           if(nums[i]<0)
           {
            nums[i]=0-nums[i];
           }
           arr.push(nums[i]);
        }
    }
    
}
if (flag===false){
    let x=-1;
    console.log(x);
}
else{
    let maxNum=0;
    for(let k=0;k<arr.length;k++)
    {
        if (arr[k]>maxNum)
        {
            maxNum=arr[k];
        }
    }
    console.log(maxNum);
}





