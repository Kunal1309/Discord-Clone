let logoArr = [], count=0, uname='';
const userLogo = document.querySelector('.user_logo');
// const logoListItem = document.querySelectorAll('.logo_list_item');
const modal = document.querySelector('.modal_container');
const modal2 = document.querySelector('.modal2_container');
const openModal = document.querySelector('.circleIconButton-1VxDrg');
const closeModal = document.querySelector('.modal_close_icon');
const closeModal2 = document.querySelector('.modal2_close_icon');
const lastCloseModal = document.querySelector('.last_modal_close_icon');
const modal2Back = document.querySelector('.modal2_back_btn');
const lastModalBack = document.querySelector('.last_modal_back_btn');
const nextModal = document.querySelector('.modal_templet');
const nextModal2 = document.querySelector('.modal2_templet');
const createBtn = document.querySelector('.modal_create_btn')
const lastModalContainer = document.querySelector('.last_modal_container')
const dataForm = document.querySelector('.modal_form')
const userName = document.querySelector('.modal_form_input');
const userBtn = document.querySelector('.userBtn');
const serverNameHover = document.querySelector('.serverNameHover');


logoArr = JSON.parse(localStorage.getItem('logoArr'))??[];
logoArr.map((ele)=>{
    createListItem(ele);
})

//========================================Display server name=======================================================
// const changeName = document.querySelector('.server_name')
// const changeUserName = document.querySelector('.server_userName')
// let title = JSON.parse(localStorage.getItem('obj'));
// changeName.innerText = title.name;
// changeUserName.innerText = title.name;
//localStorage.setItem('obj', JSON.stringify({}));



//===============================================Modal box 1==============================================================
openModal.addEventListener('click', ()=>
{
    modal.style.display ="block";
})

closeModal.addEventListener('click', ()=>
{
    modal.style.display="none";
})

//================================================Modal bOx 2=============================================================
nextModal.addEventListener('click',()=>{
    modal.style.display="none";
    modal2.style.display="block";
})
closeModal2.addEventListener('click', ()=>
{
    modal2.style.display="none";
})
modal2Back.addEventListener('click', ()=>{
    modal2.style.display="none";
    modal.style.display="block";
})


//=============================================Modal Box 3=================================================================
nextModal2.addEventListener('click',()=>{
    modal2.style.display="none"
    lastModalContainer.style.display="block";
})
lastCloseModal.addEventListener('click', ()=>
{
    lastModalContainer.style.display="none"
})
lastModalBack.addEventListener('click', ()=>{
    lastModalContainer.style.display="none"
        modal2.style.display="block";
})




//==========================================


 function addLogoItem(event){
     event.preventDefault();
     uname = userName.value;
    
    const logoObj = {
            name: uname,
        };
    logoArr.push(logoObj);
    localStorage.setItem('logoArr', JSON.stringify(logoArr));
    createListItem(logoObj);
    localStorage.setItem('obj', JSON.stringify(logoObj));
    location.href = "empty.html";
    
 }

function createListItem(logoObj){
    const listEle = document.createElement('li');
    listEle.setAttribute('class','logo_list_item');
    listEle.setAttribute("id", logoObj.name);
    listEle.innerHTML = 
    `<button class="userBtn">
    <img src="../Images/discord-v2-svgrepo-com.svg" alt="" class="envi"/>
    <span class="serverNameHover">${logoObj.name}</span>
    </button>`
    userLogo.appendChild(listEle);
    dataForm.reset();
    lastModalContainer.style.display = "none";
}



function createEnviornment(event){
   console.log(event);
     event.preventDefault();
     let candidate = event.path[2].id;
     logoArr.forEach((ele)=>{
     if (ele.name == candidate)
        localStorage.setItem('obj', JSON.stringify(ele));
     })
     location.href = "empty.html";
}

function openOdinProj(event){
    location.href="app.html";
}










dataForm.addEventListener('submit', addLogoItem);
userLogo.addEventListener('click',(event)=>{
     if(event.target.classList.contains("envi"))
     {  
         createEnviornment(event);
      }
    else if(event.target.classList.contains("the_odin_pro"))
      {
         openOdinProj(event);
      }
});
document.querySelectorAll('.logo_list_item').forEach((ele)=>{
    ele.addEventListener('mouseover', ()=>{
        console.log(ele);
        ele.querySelector('.serverNameHover').style.display="block";
    })
    ele.addEventListener('mouseout', ()=>{
        ele.querySelector('.serverNameHover').style.display="none";
    })
})



// ===KT======================= Targets for Creation Of Channel ===========================

const $createButton = document.getElementById('create-channel-form-create-btn');
const $cancelButton = document.getElementById('create-channel-form-cancel-btn')
const $userInputText = document.getElementById('channel-input');
const $welcomeGreet = document.getElementById('channel-welcome-greet');
const $welcomeInput = document.getElementById('channel-welcome-text');
const $heading = document.getElementById('channel-main-heading');
const $form = document.getElementById(`create-channel-form`);
const $channelAdd = document.getElementById('channel-text-button');
const $channelClose = document.getElementById('x-markClose');
const $channelGeneral = document.getElementById('generalItem');
const $dummyDataEmptyPage = document.getElementById('emptyPageDummyData');
const $MidGreet = document.getElementById('midAreaGreeting');
const $welcomeBoard = document.getElementById('channel-welcome-sec');
const $channelNew = document.getElementById('channel-ul-list');
let channelArr = []; channelObj = {};

// ========================== Function for Get Channel from localStorage ===========================

channelArr = JSON.parse(localStorage.getItem('kunal'))||[];
channelArr.map((ele)=>{
   createChannelList(ele);
})


// ========================== Function for display Channel stored in a localStorage ===========================

function createChannelList(ele){
   const Li = document.createElement('li');
   Li.setAttribute("id", ele.golu);
   Li.setAttribute("class", "channelCreated");
   Li.innerHTML = `<i class="fa fa-hashtag"></i> &nbsp${ele.golu}`;
   $channelNew.appendChild(Li);
}

// ========================== Function for Jump to any existing Channel in the list ===========================

function jumpToAnotherChannel(e){
    console.log(e);
   e.preventDefault();
   if(e.target.classList.contains('channelCreated')){
   $form.style.display = 'none';
   $heading.innerText = e.target.innerText
   $welcomeGreet.innerText = `Welcome to #${e.target.innerText}!`;
   $welcomeInput.innerText = `This is the start of the #${e.target.innerText} channel.`;
   e.target.parentElement.style.width = '160px';
   e.target.parentElement.style.padding = '3px';
   e.target.parentElement.style.borderRadius = '5px';
   $dummyDataEmptyPage.style.display = 'none';
   $MidGreet.style.display = 'none';
   $welcomeBoard.style.display = 'flex';
  };
};

// ========================== Function for Form of New Channel cancel/close ===========================

function cancelCreationChannel(e){
   e.preventDefault();
   $form.style.display = 'none';
   $MidGreet.style.display = 'block';
   $dummyDataEmptyPage.style.display = 'flex';
}
function closeForm(e){
   e.preventDefault();
   $form.style.display = 'none';
   $MidGreet.style.display = 'block';
   $dummyDataEmptyPage.style.display = 'flex';
}

// ========================== Function for Form Display to Create New Channel ===========================

function textChannelAdd(e){
   e.preventDefault();
   $form.style.display = 'block';
   $MidGreet.style.display = 'none';
   $dummyDataEmptyPage.style.display = 'none';
}

// ========================== Function for Submit Form for New Channel ===========================

function createChannel(e){
   e.preventDefault();

   if($userInputText.value.length == 0){
      alert('enter channel name!')
   } else {

      channelObj = {
            golu : $userInputText.value,
      };

      channelArr.push(channelObj);
      localStorage.setItem('kunal', JSON.stringify(channelArr));

   $heading.innerText = `${$userInputText.value}`
   $welcomeGreet.innerText = `Welcome to #${$userInputText.value}!`;
   $welcomeInput.innerText = `This is the start of the #${$userInputText.value} channel.`;
   $form.style.display = 'none';
   document.createElement('li');
   const newLi = document.createElement('li');
   newLi.innerHTML = `<i class="fa fa-hashtag"></i> &nbsp<p>${$userInputText.value}</p>`;
   $channelNew.appendChild(newLi);
   $userInputText.value = '';
   $welcomeBoard.style.display = 'flex';
   $MidGreet.style.display = 'none';
   $dummyDataEmptyPage.style.display = 'none';
   }
}

// ========================== addEventListener for Channel ===========================

$form.addEventListener ("submit", createChannel);
$cancelButton.addEventListener ("click", cancelCreationChannel);
$channelAdd.addEventListener ("click", textChannelAdd);
$channelNew.addEventListener ("click", jumpToAnotherChannel);
$channelClose.addEventListener ("click", closeForm)












