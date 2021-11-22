import React,{useState} from 'react';
//import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel  from '@material-ui/core/FormControlLabel';
//import Switch from '@material-ui/core/Switch';
//import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
//import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
     fontSize: '1.0rem',
     backgroundColor:"#6d9bba",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  form_root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  UI_Icons :{
     height:theme.spacing(12),
  },
  UI_Paper: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(10),
      height: theme.spacing(16),
    },
  },
}));




const Inp_Layer = props =>{

const classes = useStyles();

console.log("fld_id"+props.inp_details[1].fld_id)

/*const [userInputstate, setuserInputstate] = useState(
         [ {"fld_id":"fld1",
            "fld_name":"POSREQ_FILE_NAME",
            "fld_val" :""
            }
            ]
        );*/

const [userInputstatevalues, setuserInputstatevalues] = useState(
         [ {"fld_id":"fld1",
            "fld_name":"POSREQ_FILE",
            "fld_val" :""
            },
            {"fld_id":"fld2",
            "fld_name":"FI_ID",
            "fld_val" :""
            }
            ]
        );


  
        console.log("ui_fld ");
 //console.log("ui_fld " +userInputstate[0].fld_id);
 //console.log("ui_fld_values " +userInputstatevalues[0].fld_id);

 const updateFieldChanged = (index) => e => {

    console.log('index: ' + index);
    console.log('property name: '+ e.target.value);
    //let newArr = [...userInputstatevalues]; // copying the old datas array
    //newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to
    //console.log('newArr : '+newArr);

    setuserInputstatevalues(
       userInputstatevalues.map((item, index) => {
       console.log('item.fld_val'+item.fld_val);
        console.log('item.fld_name'+ item.fld_name);
       item.fld_id === e.target.id ? item.fld_val : e.target.value
       console.log('item.fld_id'+item.fld_id+'  '+ item.fld_id +'item.fld_id+999' +e.target.id +' e.target.id'+e.target.value+'e.target.value');
       console.log(item.fld_id +'item.fld_id');
        console.log('index' +index);
       
       })

     )

    //setuserInputstatevalues(newArr); // ??
    console.log("ui_fld_values " +userInputstatevalues[0].fld_val);

}


 function handleChange(e) {
    console.log(e.target.value);
    //setuserInputstate[0].fld_val(e.target.value);
  }
   //console.log("ui_fld " +userInputstate[0].fld_val);

return(
   <div className={classes.root}>
	<Grid container item >
	<Grid container item direction={'column'} xs={1} alignItems='center' >
    <Paper className={classes.UI_Paper} style={{backgroundColor:"#c9e8f5"}}>
    <Grid container item direction={'column'} xs={12} className={classes.UI_Icons}>
    <Grid container item xs={4} >
    <Grid item xs={12}>
     <Avatar className={classes.small}>UI</Avatar>
    </Grid>
    </Grid>
    <Grid item xs={4}>
    </Grid>
    <Grid item xs={4}>
    </Grid>
    </Grid>
    </Paper>
    </Grid>
	<Grid container item xs={11}>
     <form className={classes.form_root} noValidate autoComplete="off">
     <div>
     {props.inp_details.map((inp, index)=>{
     console.log("inp"+inp+"index"+index);
     if(index===0){console.log("inside 0--inp"+inp+"index"+index);}
     else{
     console.log("inp"+inp+"index"+index+"inp[0].fld_id");
     return(
      <TextField
          required
          id={inp.fld_id}
          label={inp.fld_name}
          variant="outlined"
          value={inp.fld_val}
          onChange={updateFieldChanged()} 
          //onChange={e => setuserInputstate.ui(e.target.value)}
        > </TextField>
      )}
      })
      } 
    </div>
   { /*<div>
      <TextField
          required
          id={userInputstate[1].fld_id+999}
          label={userInputstate[1].fld_name}
          variant="outlined"
          value={userInputstate[1].fld_val}
          onChange={updateFieldChanged(1)} 
        > </TextField>
     
    </div>*/}
    </form>
    </Grid>
	</Grid>
   </div>
)


}

export default Inp_Layer
