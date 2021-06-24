import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12, 4),
  },
}));
const Pickup = () => {
  const classes = useStyles();
  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container spacing="3" alignItems="center" justify="center">
        <Grid item xs={12} sm={9}>
          <Grid container justify="center" spacing="3">
            {[0, 1, 2, 4, 5, 6, 7, 8, 9].map((value) => (
              <Grid key={value} item>
                <Card />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pickup;