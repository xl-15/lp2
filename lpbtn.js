function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}




function showSearchTab(){
    const search = document.querySelector('.searchInput')
    search.style.display = 'flex'

     const searchIcon = document.querySelector('.searchIcon')
    searchIcon.style.display = 'none'

    const closeIcon = document.querySelector('.closeIcon')
    closeIcon.style.display = 'flex'

}

function closeSearchTab(){
    const closeSearch = document.querySelector('.closeIcon')
    closeSearch.style.display = 'none'

    const search = document.querySelector('.searchInput')
    search.style.display = 'none'

    const searchIcon = document.querySelector('.searchIcon')
    searchIcon.style.display = 'flex'



    
}