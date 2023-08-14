import * as React from 'react';
import { Card, styled } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const ExpandMore = styled((props) => {
    const { expand,...other } = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

const SingleCard = ({title, genero, precio, foto, descripcion}) => {
    
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    
    return (
    <div className='div-card-content'>
        <Card sx={{ maxWidth: 325 }} className='single-card-item'>
            <CardMedia
                component="img"
                height="370"
                image={foto}
                alt="picture"
                className='card-img'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <h4>{title}</h4>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Genero: </strong> {genero}
                </Typography>
                <Stack spacing={1}>
                    <div className="botton-div">
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <p className='price-label'> {precio} </p>
                    </div>
                </Stack>
            </CardContent>
            <CardActions disableSpacing className='cart-button'>
                <Button size="small" color="primary">
                    Agregar al carrito
                </Button>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more" >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {descripcion}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    </div>
  )
}

export default SingleCard