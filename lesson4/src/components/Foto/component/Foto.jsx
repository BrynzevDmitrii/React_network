import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import faker from 'faker';
import { Maximize } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  // imageList: {
  //   height:'max-content',
  //   width:'max -content'
  // },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },

}));


  const itemData = Array.from({
    length:10
}).map(()=>({
    id:faker.datatype.uuid(),
    img: faker.image.image(),
    title: faker.lorem.words(5),
    author: faker.name.firstName(),
    }));

export default function TitlebarImageList() {
  const classes = useStyles();
  const sew =()=>{
    console.log(itemData)
  }
  return (
    <div className={classes.root} onClick = {sew}>
      <ImageList rowHeight={'auto'} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="dv">December</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar 
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              // actionIcon={
              //   <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
              //     <InfoIcon />
              //   </IconButton>
              // }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
function Foto(props) {
    return(
        <h1>johfue</h1>
    )
}


