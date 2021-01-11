import { CardContent,Typography,Card, CardActions,Button,Grid } from '@material-ui/core';
import React from 'react';
const MyCard=({match})=>{

    const getMatchCart=()=>{
        return (
            <Card style={{marginTop:20}}>
                <CardContent>
                    <Grid container justify="center"alignItems="center">
                        <Grid item>
                            <Typography variant="h5">{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                           <img style={{width:170}} src={require("../img/download.jpg")} alt=""/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{match["team-2"]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                   <Grid container justify="center" spacing={3}>
                   <Button item variant="contained" color="primary">
                        Show Details
                    </Button>
                    <Button style={{marginLeft:5}} item variant="contained" color="primary">
                        {new Date().toString()}
                    </Button>
                   </Grid>
                </CardActions>
            </Card>
            )
        
        
            
    }
      return getMatchCart();
      
};
export default MyCard;