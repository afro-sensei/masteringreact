import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container as="master">
      <Header as="h1"> Budget Bangerz</Header>
      <Statistic size= "small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>69,420.42</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="Tiny" color="purple">
                <Statistic.Label style={{textAlign: 'Left'}}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>
                  419.70
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size="Tiny" color="yellow">
                <Statistic.Label style={{textAlign: 'Left'}}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>
                  9001
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

<Header as='h3'>History</Header>
<Segment color='red'>
  <Grid columns={3} textAlign="right">
    <Grid.Row>
      <Grid.Column width={10} textAlign='left'>Points</Grid.Column>
      <Grid.Column width={3} textAlign='right'>$500</Grid.Column>
      <Grid.Column width={3}>
        <Icon name="edit" bordered/>
        <Icon name="trash" bordered/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
<Segment color='green'>
  <Grid columns={3} textAlign="right">
    <Grid.Row>
      <Grid.Column width={10} textAlign='left'>Bonuses</Grid.Column>
      <Grid.Column width={3} textAlign='right'>$200</Grid.Column>
      <Grid.Column width={3}>
        <Icon name="edit" bordered/>
        <Icon name="trash" bordered/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
<Segment color='green'>
  <Grid columns={3} textAlign="right">
    <Grid.Row>
      <Grid.Column width={10} textAlign='left'>Winnings</Grid.Column>
      <Grid.Column width={3} textAlign='right'>$1000</Grid.Column>
      <Grid.Column width={3}>
        <Icon name="edit" bordered/>
        <Icon name="trash" bordered/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>

<Header as="h3"> Add new Transaction</Header>
<Form unstackable>
  <Form.Group>
    <Form.Input
    icon='tags' width = {12} 
    label= 'Description'
    placeholder="Surprises!"
    />
    <Form.Input width={4} label='Value' 
    placeholder="2.00" icon='dollar'
    iconPosition='left'
    />
  </Form.Group>
  <Button.Group style={{marginTop:20}}>
    <Button>Cancel</Button>
    <Button.Or />
    <Button primary>Ok</Button>
  </Button.Group>
</Form>

    </Container>
  );
}

export default App;
