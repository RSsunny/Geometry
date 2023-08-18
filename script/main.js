function handelClick(target,number){
    const inputFildBFild=target.parentNode.parentNode.childNodes[5].childNodes[1]
    const inputFildB=target.parentNode.parentNode.childNodes[5].childNodes[1].value
    const inputFildHFild=target.parentNode.parentNode.childNodes[5].childNodes[4]
    const inputFildH=target.parentNode.parentNode.childNodes[5].childNodes[4].value   
    inputFildBFild.value=''
    inputFildHFild.value=''
    if(isNaN(inputFildB)||isNaN(inputFildH) || inputFildB.length===0||inputFildH.length===0){
        alert('please provide a number')
        return
    }
    const area=parseFloat(number)*parseFloat(inputFildB)*parseFloat(inputFildH)
    const setValu=target.parentNode.parentNode.childNodes[7].childNodes[1]
    setValu.innerText=area.toFixed(1)
    const name=target.parentNode.parentNode.childNodes[1].innerText
    const setAnotherSite=document.getElementById('quntity')
    const count=setAnotherSite.childElementCount;
    const p=document.createElement('p')
    p.classList.add('my-2')
    p.innerHTML=`
    ${count+1}. ${name} ${area} cm<sup>2</sup>
    `
    setAnotherSite.appendChild(p)
}