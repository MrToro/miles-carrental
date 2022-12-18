import styled from 'styled-components';

import burgerImage from '../../assets/Header_Buger.svg';
import logoImage from '../../assets/Header_Logo.svg';
import moneyImage from '../../assets/Header_Money.svg';
import languageImage from '../../assets/Header_Language.svg';

export const Container = styled.div({
	display: 'flex',
	alignItems: 'center',
	gap: '2rem',
	width: '100%',
	padding: '1rem 1.5rem',
});

export const BurgerMenu = styled.button({
	width: '2rem',
	height: '1.6rem',
	backgroundImage: `url(${burgerImage})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
});

const LogoDefault = styled.button({
	width: '7.9rem',
	height: '3.4rem',
	marginRight: 'auto',
	backgroundImage: `url(${logoImage})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	transition: 'all 300ms ease',
});

export const Logo = styled(LogoDefault)<{ open: boolean }>`
	margin-left: ${(props: { open: boolean }) => (props.open ? 'auto' : '0')}};
`;

export const MoneyButton = styled.button({
	width: '2rem',
	height: '2rem',
	backgroundImage: `url(${moneyImage})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
});

export const LanguageButton = styled.button({
	width: '2rem',
	height: '2rem',
	backgroundImage: `url(${languageImage})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
});
