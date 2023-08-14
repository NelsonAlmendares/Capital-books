import * as React from 'react'
import { Menu, MenuItem ,Button } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import SingleCard from './SingleCard';
import axios from 'axios';

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center'
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center'
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color:
			theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
		boxShadow:
			'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity,
				),
			},
		},
	},
}));


function Cards() {
	
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [books, setBooks] = React.useState([])
	React.useEffect(() => {
		const fetchAllBooks = async () => {
			try {
				const res = await axios.get("http://localhost:3005/api/products")
				setBooks(res.data)
			} catch (err) {
				console.log(err);
			}
		}
		fetchAllBooks()
	},[])

	return (
		<div className='cards'>
			<div className="menu-lista">
			<Button
				id="demo-customized-button"
				aria-controls={open ? 'demo-customized-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				variant="outlined"
				disableElevation
				onClick={handleClick}
				className='btn-categorias'
				endIcon={<KeyboardArrowDownIcon /> }
			>
				Categorías
			</Button>
			<StyledMenu
				id="demo-customized-button"
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose} disableRipple className='item-menu'>
					<EditIcon />
						Edit
				</MenuItem>
			</StyledMenu>
			</div>

			<div className="card-container">
				<div className="row">
					<div className="col items">
						{books.map((book) => (
							<SingleCard
							key={book.id}
							title={book.product_name}
							genero={book.product__gender}
							foto={book.foto}
							precio={book.product_price}
							descripcion={book.product_description} />
						))}

					</div>
				</div>
			</div>

		</div>
	)
}

export default Cards