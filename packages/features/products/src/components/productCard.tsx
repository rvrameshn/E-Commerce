import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useDispatch } from 'react-redux';



export function ProductCard({ product }: { product: any }) {
    const dispatch = useDispatch();
    return (
        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="200"
                image={product.images[0]}
                alt={product.name}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    High-quality features for everyday use.
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">Buy Now</Button>
                <Button size="small" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })} variant="outlined">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}