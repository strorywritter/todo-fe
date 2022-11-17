import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
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
    <Card sx={{ maxWidth: 345 }}>
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
        height="194"
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
