import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import { Media } from '../slime-shared/types/slime/Media';
import GameCard from './GameCard';

const GameGrid = (title: string, searchResults: Media[]) => {
	let render = <></>;

	if (searchResults.length > 0) {
		render = (
			<Paper elevation={1} sx={{ m: 2 }}>
				<Typography sx={{ p: 2 }} variant="h4">
					{title}
				</Typography>
				<Grid container p={4} spacing={4} id="gameslist">
					{searchResults &&
						searchResults.map((result: Media) => (
							<Grid key={result.productId} item xs={6} sm={4} md={3} lg={2}>
								<GameCard media={result} />
							</Grid>
						))}
				</Grid>
			</Paper>
		);
	}

	return (
		<Paper elevation={1} sx={{ m: 2 }}>
			{render}
		</Paper>
	);
};

export default GameGrid;
