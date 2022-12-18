import { useState } from 'react';
import { Container, BurgerMenu, Logo, MoneyButton, LanguageButton } from './styles';

const image = import('../../assets/Header_Buger.svg');

const Header = () => {
	const [open, setOpen] = useState(false);
	const showMenu = () => {
		setOpen(!open);
	};

	return (
		<>
			<Container>
				<BurgerMenu onClick={showMenu} type='button' />
				<Logo open={open} type='button' />
				<MoneyButton type='button' />
				<LanguageButton type='button' />
			</Container>
		</>
	);
};

export default Header;
