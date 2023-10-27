import '../styles/header.css';

const styles = {
    header: {
        background: 'light blue',
        color: 'white'
    },
    h1: {
        fontSize: '70px'
    }
};

function Header () {
    return (
        <header className="header" style={styles.header}>
            <h1 style={styles.h1}>Andrew Perkins</h1>
        </header>
    );
}

export default Header;
