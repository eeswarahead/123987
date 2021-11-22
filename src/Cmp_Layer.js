import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import Fab from '@material-ui/core/Fab';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { red,gray } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StorageTwoToneIcon from '@material-ui/icons/StorageTwoTone';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    width: "100%",
    borderLeft: "solid",
    borderLeftColor: "#f0d8d8",
    borderLeftWidth: 5,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
     fontSize: '1.0rem',
     backgroundColor:"#e57373",
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
      width: "100%",
      height: theme.spacing(16),
    },  
  },
  card_root: {
    //maxWidth: 450,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor:'#f0ddd1',// red[300],
     width: theme.spacing(10),
     fontSize: '1.0rem',
     color:"black",
  },
  root_dialog: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  table: {
    minWidth: 700,
  },
}));

 




const Cmp_Layer = props =>{

    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor: "#F0D8D8",
        //theme.palette.common.black,
        color: theme.palette.common.black,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);


    const DialogTitle = withStyles(useStyles)((props) => {
      const { children, classes, onClose, ...other } = props;
      return (
        <MuiDialogTitle disableTypography className={classes.root_dialog} {...other}>
          <Typography variant="h6">{children}
          {onClose ? ( <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                       <CloseIcon />
                       </IconButton>
          ) : null}</Typography>
        </MuiDialogTitle>
      );
    });

    const DialogContent = withStyles((theme) => ({
      root: {
        padding: theme.spacing(2),
      },
    }))(MuiDialogContent);

    const DialogActions = withStyles((theme) => ({
      root: {
        margin: 0,
        padding: theme.spacing(1),
      },
    }))(MuiDialogActions);

     const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


      const handleExpandClick = () => {
        setExpanded(!expanded);
        //console.log("before change comp_data"+Comp_data[0] +Comp_data[1]+ Comp_data[2]);
        handleExpandClick_Comp_data(1);
         //setComp_data([0]=false);
        //console.log("after change comp_data"+Comp_data[0] +Comp_data[1]+ Comp_data[2]);
      };

    const Comp_dataIntialvalue = [{visible:false}, {visible:false}, {visible:false}, {visible:false}]
     const [Comp_data, setComp_data] =useState(Comp_dataIntialvalue);

    // console.log("Comp_data"+Comp_data[0].visible +Comp_data[1].visible+ Comp_data[2].visible);
    
     const handleExpandClick_Comp_data = (index) => {
            let items = [...Comp_data];
            // 2. Make a shallow copy of the item you want to mutate
            let item = {...items[index]};
            console.log("inside handle item"+item);
            // 3. Replace the property you're intested in
            item.visible = (!item.visible);
            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
            items[index] = item;
            // 5. Set the state to our new copy
            setComp_data([...items]);
            console.log("inside handle Comp_data"+Comp_data[0].visible +Comp_data[1].visible+ Comp_data[2].visible);
      };

      //console.log("Comp_data"+Comp_data[0] +Comp_data[1]+ Comp_data[2]);

return(    <div className={classes.root} id="div">
	        <Grid container item xs={12} spacing={2}>
	          {/*<Grid container item direction={'column'} xs={1} alignItems='center' >
             <Paper className={classes.UI_Paper} style={{backgroundColor:"#f0d8d8"}}>
              <Grid container item direction={'column'} xs={12} className={classes.UI_Icons}>
               <Grid container item xs={4} >
                <Grid item xs={12}>
                 <Avatar className={classes.small}>CL</Avatar>
                </Grid>
               </Grid>
               <Grid item xs={4}>
               </Grid>
               <Grid item xs={4}>
               </Grid>
              </Grid>
             </Paper>
            </Grid>*/}
	         <Grid container item xs={12} /*className={classes.root}*/ spacing={2} >
              {props.comp_details && props.comp_details.map((L,index)=>{
              // console.log('L'+L.comp_name +' index'+index);

                 const rslt_set = Object.keys(L.comp_rslt_set[0]);
                 const keys = Object.values(rslt_set);
                 console.log(keys+ 'keys'+rslt_set+'rslt_set');
                 let Comp_Type='SQL';
                 if (L.comp_type===2){
                  Comp_Type='Script';
				 }
              return(
              <Grid item xs={12}>
              <Card className={classes.card_root}>
              <CardHeader
                avatar={
                  <Avatar variant="rounded" aria-label="recipe" className={classes.avatar}>
                  {Comp_Type } 
                  </Avatar>
                }
                action={
                  <Box>
                  {/*<IconButton aria-label="settings"  onClick={() => handleClickOpen}>
                    <StorageTwoToneIcon />
                  </IconButton>*/}
                  <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: Comp_data[index].visible,
                  })}
                  onClick={() => handleExpandClick_Comp_data(index)}
                  aria-expanded={Comp_data[index].visible}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
                </Box>
                }
                title={L.comp_name}
               // subheader={L.comp_desc}
              />
              {/*<CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  query
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
               {/* <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>}
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: Comp_data[index].visible,
                  })}
                  onClick={() => handleExpandClick_Comp_data(index)}
                  aria-expanded={Comp_data[index].visible}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions> */}
              <Collapse in={Comp_data[index].visible} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph  align="left">{L.comp_dtl}</Typography>
          
                </CardContent>
                <CardContent>
                 <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                   {rslt_set.map((rs) => (
                    <StyledTableCell align="left">{Object.values(rs)}</StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {L.comp_rslt_set.map((recs,index ) => {
                 
                    return(
                    <StyledTableRow key={index} hover="true"> {Object.keys(recs).map((key,index)=>{
                                                  return(
                                                         <StyledTableCell align="left">{recs[key]}</StyledTableCell>
                                                         )
                                                   })}
                    </StyledTableRow>
                  )})}
                </TableBody>
              </Table>
              </TableContainer>
          
                </CardContent>
              </Collapse>
               <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}> 
                  Query Result
                </DialogTitle>
                <DialogContent dividers>
                 <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                       {rslt_set.map((rs) => (
                        <StyledTableCell align="right">{Object.values(rs)}</StyledTableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {L.comp_rslt_set.map((recs,index ) => {
                 
                        return(
                        <StyledTableRow key={index}> {Object.keys(recs).map((key,index)=>{
                                                      return(
                                                             <StyledTableCell align="right">{recs[key]}</StyledTableCell>
                                                             )
                                                       })}
                        </StyledTableRow>
                      )})}
                    </TableBody>
                  </Table>
                </TableContainer>
                </DialogContent>
              </Dialog>
            </Card>
            </Grid>
            )

               })}
            </Grid>
	        </Grid>
        </div>
    
)


}

export default Cmp_Layer
