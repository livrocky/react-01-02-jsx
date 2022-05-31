// create and export the Icon component
// component returns <i class="fa fa-facebook-official" aria-hidden="true"></i>
// make it so prop icon=fa-fa-facebook-official loads icon
// use icon in App.js

function Icon(props) {
  return <i className={`fa ${props.icon}`} aria-hidden='true'></i>;
}

// function IconIg(props) {
//   return <i class=`fa ${} fa-instagram` aria-hidden='true'></i>;
// }

export default Icon;
