import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import FeatureCard from "./FeatureCard";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 1),
  },
  paper: {
    borderRadius: 20,
  },
}));
const Features = () => {
  const classes = useStyles();
  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container spacing="3" alignItems="center" justify="center">
        <Grid item xs={12} sm={4}>
          <Grid container justify="center" spacing="3">
            <Grid item>
              <FeatureCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Features;
