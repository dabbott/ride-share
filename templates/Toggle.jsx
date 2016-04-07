<ToggleContainer
  value={(this.state && this.state.option) || 'One'}
  options={['One', 'Two', 'Three', 'Four']}
  style={{padding: 10}}
  orientation={"horizontal"}
  spacing={10}
  renderItem={(option, active) => (
    <ToggleItem
      option={option}
      active={active}
      onPress={() => this.setState({option})}
      color={"rgb(74,144,226)"}
      backgroundColor={"rgb(255,255,255)"}
      borderColor={"rgba(231,231,231,1)"}
      activeColor={"rgba(255,255,255,1)"}
      activeBackgroundColor={"rgb(74,144,226)"}
      borderRadius={2}
    />
  )}
/>