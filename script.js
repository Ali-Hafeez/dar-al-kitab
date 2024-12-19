// Restart animations on hover for engagement
document.querySelector('.coming-soon-container').addEventListener('mouseenter', () => {
	const container = document.querySelector('.coming-soon-container');
	container.style.animation = 'none';
	setTimeout(() => {
		container.style.animation = 'scale-up 1.5s ease-in-out';
	}, 10);
});
