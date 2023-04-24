// As you can see, this file has a .jsx file extension. This extension is
// used (when good practices are used) when the file mixes JS with HTML/XML
// if you need to create a file that only has JS syntaxis, you should use
// the .js file extension, React is capable of interpreting both file extensions :)

import './TestComponent.scss'
// As used above, you can import the scss files specific for a component

const TestComponent = ({ testTextProp = 'Test text', children }) => {
  // The above is the way components are normally defined. It is IMPORTANT
  // that the name given with the component starts with a capital letter,
  // otherwise, React won't recognise it, and by convention, the filename
  // is usually the same as the component's name. You can see a component as
  // a function (because this syntaxis is used to define a function) that 
  // performs some actions and then returns HTML/XML as below:
  return(
    <div className="testClass">
      {/* As you can see, commenting inside HTML is kind weird, but
          it is because when we need to reference the JS variables or
          sprinkle some JS code, we need to enclose it in brackets ('{}') 
      */}
      <h3>Text Prop (with a default value):</h3>
      {testTextProp}
      <h3>Prop Children:</h3>
      {/* The variable used above is called a prop, and it allows us to send
          some information to a component. Making it possible to reuse
          components whose only change in one section or other may only be 
          text (such is the case of buttons). The way the props were defined
          in the component is called 'dereferencing' and is pretty useful
      */}
      {children}
      {/* 
        The 'children' atribute of props is a way of inserting any arbitrary
        HTML/XML inside the component, you can check out how it's done in
        the pages this components gets imported to
      */}
    </div>
  )
}

// The export default makes it so that when you import this file,
// what's mentioned in it, in this case the component doesn't have to
// be accessed as an object's attribute (the case of other export), only
// using the name is enough (as you'll see in the files this gets imported)
export default TestComponent