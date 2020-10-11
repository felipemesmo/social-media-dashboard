const btn = document.querySelector('.theme-change')
const theme = document.querySelector('html')

btn.addEventListener('change', changeTheme, false)

function changeTheme (status) {
    return status.target.checked
    ? theme.classList.add('dark-theme')
	: theme.classList.remove('dark-theme')
}