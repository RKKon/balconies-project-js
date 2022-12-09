const tabs = () => {
  const tabItem = document.querySelectorAll('.glazing_block');
  const tabContent = document.querySelectorAll('.glazing_content');
  
  const hideTabContent = () => tabContent.forEach(item => item.style.display = 'none');
  const showTabContent = (i) => tabContent[i].style.display = 'block';
  const addActiveClassToTab = (i) => tabItem[i].children[1].classList.add('active');
  const removeActiveClassTab = () => tabItem.forEach(tab => tab.children[1].classList.remove('active'));
  
  const choosingRightBalconyInFormCalcProfile = (i) => {
    const balconyTypeInModal = document.querySelector('#view_type').querySelectorAll('option');
    balconyTypeInModal.forEach((balconyType, index) => {
      if (index === i) { return balconyType.selected = true; }
    })
  };

  const openTab = () => {
    tabItem.forEach((tab, i) => {
      tabItem[0].children[1].classList.add('active'); // fist tab become active
      tab.addEventListener('click', () => { 
        hideTabContent();
        removeActiveClassTab();
        addActiveClassToTab(i);
        showTabContent(i);        
        choosingRightBalconyInFormCalcProfile(i);
      })
    });
  };
  openTab();


  const usingDecorationTabs = () => {
    const balconyDecorationContent = document.querySelector(".decoration_content .row");
    const balconyDecorationTab = document.querySelectorAll('.no_click'); //tabs
    
    balconyDecorationTab.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        for (let k = 0; k < balconyDecorationTab.length; k++) {
          balconyDecorationTab[k].classList.remove('after_click');
        }
        tab.classList.add('after_click');
        
        for (let index = 0; index < balconyDecorationContent.children.length; index++) {
          balconyDecorationContent.children[index].style.display = 'none';
        }
        balconyDecorationContent.children[i].style.display = 'block';
      })
    })
  }
  usingDecorationTabs();
  
  
}

export default tabs