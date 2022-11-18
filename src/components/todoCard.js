import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ActionMenu from './actionMenu';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TodoCard({ task, onChange }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345, height: 550,display:'flex',alignItems:'space-between',flexDirection:'column',justifyContent:'space-between' }}>
      <CardHeader
        action={
          <ActionMenu task={task} onChange={onChange} id={task._id}/>
        }
        title={task.taskName}
        subheader={task.createdAt.split('T')[0]}
        titleTypographyProps={{textAlign:'left',fontWeight:'bold',fontSize:'16px'}}
        subheaderTypographyProps={{textAlign:'left',fontSize:'14px'}}
      />
      <CardMedia
        component="img"
        width="200"
        height="200"
        src={task.file}
        alt="todo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Chip label={task.status} color={task.status == "Todo" ? "error": task.status == "In progress" ? "warning"  : "success" }/>

      </CardActions>

    </Card>
  );
}
