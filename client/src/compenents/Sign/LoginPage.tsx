// import React from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
// import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";
// // core components
// import Header from "../material-ui-setCompone.tsx/Header";
// import HeaderLinks from "../material-ui-setCompone.tsx/HeaderLinks";
// import Footer from "../material-ui-setCompone.tsx/Footer";
// import GridContainer from "../material-ui-setCompone.tsx/GridContainer";
// import GridItem from "../material-ui-setCompone.tsx/GridItem";
// import Button from "../material-ui-setCompone.tsx/Button";
// import Card from "../material-ui-setCompone.tsx/Card";
// import CardBody from "../material-ui-setCompone.tsx/CardBody";
// import CardHeader from "../material-ui-setCompone.tsx/CardHeader";
// import CardFooter from "../material-ui-setCompone.tsx/CardFooter";
// import CustomInput from "../material-ui-setCompone.tsx/CustomInput";

// import styles from "../../sources/jss/loginPage";

// import image from "../../sources/images/signBackground.jpg";

// import GoogleLogin from 'react-google-login'

// const responseGoogle = (response) => {
//     console.log(response);
//   }

// const useStyles = makeStyles(styles);

// export default function LoginPage(props) {
//   const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
//   setTimeout(function() {
//     setCardAnimation("");
//   }, 700);
//   const classes = useStyles();
//   const { ...rest } = props;
//   return (
//     <div>
//       <Header
//         absolute
//         color="transparent"
//         brand="Material Kit React"
//         rightLinks={<HeaderLinks />}
//         {...rest}
//       />
//       <div
//         className={classes.pageHeader}
//         style={{
//           backgroundImage: "url(" + image + ")",
//           backgroundSize: "cover",
//           backgroundPosition: "top center"
//         }}
//       >
//         <div className={classes.container}>
//           <GridContainer justify="center">
//             <GridItem xs={12} sm={12} md={4}>
//               <Card className={classes[cardAnimaton]}>
//                 <form className={classes.form}>
//                   <CardHeader color="primary" className={classes.cardHeader}>
//                     <h2>Login</h2>
//                     <div className={classes.socialLine}>
//                       <Button
//                         justIcon
//                         href="#pablo"
//                         target="_blank"
//                         color="transparent"
//                         onClick={e => e.preventDefault()}
//                       >
//                         <GoogleLogin
//                         clientId="506409305581-0fli2rf5n3rfbir6mvd82kb5oce6oek1.apps.googleusercontent.com"
//                         buttonText="Google Login"
//                         onSuccess={responseGoogle}
//                         onFailure={responseGoogle}
//                         cookiePolicy={'single_host_origin'}
//                     />
//                       </Button>
//                     </div>
//                   </CardHeader>
//                   <CardBody>
//                     <CustomInput
//                       labelText="First Name"
//                       id="first"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                       inputProps={{
//                         type: "text",
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <People className={classes.inputIconsColor} />
//                           </InputAdornment>
//                         )
//                       }}
//                     />
//                     <CustomInput
//                       labelText="Email"
//                       id="email"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                       inputProps={{
//                         type: "email",
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <Email className={classes.inputIconsColor} />
//                           </InputAdornment>
//                         )
//                       }}
//                     />
//                     <CustomInput
//                       labelText="Password"
//                       id="pass"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                       inputProps={{
//                         type: "password",
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <Icon className={classes.inputIconsColor}>
//                               lock_outline
//                             </Icon>
//                           </InputAdornment>
//                         ),
//                         autoComplete: "off"
//                       }}
//                     />
//                   </CardBody>
//                   <CardFooter className={classes.cardFooter}>
//                     <Button simple color="primary" size="lg">
//                       Register
//                     </Button>
//                   </CardFooter>
//                 </form>
//               </Card>
//             </GridItem>
//           </GridContainer>
//         </div>
//         <Footer whiteFont />
//       </div>
//     </div>
//   );
// }
