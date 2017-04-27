scrivito.configure({
  tenant: 'c719f1773b2bb24c527fd334120ed98e',
  homepage: () => scrivito.Obj.getByPath('/'),
});

const Homepage = scrivito.createObjClass({
  name: 'Homepage',
  attributes: {
    title: 'string',
    content: 'widgetlist',
  },
});

scrivito.provideComponent(Homepage, obj =>
  <div>
    <scrivito.React.Content tag="h1" content={ obj } attribute="title" />
    <scrivito.React.Content content={ obj } attribute="content" />
  </div>
);

scrivito.provideUiConfig(Homepage, {
  title: 'Homepage',
  description: 'Root page of the whole site',

  attributes: {
    title: {
      title: 'Title',
      description: 'Homepage title.',
    },

    content: {
      title: 'Content',
      description: 'Homepage content.',
    },
  },
});

const TextWidget = scrivito.createWidgetClass({
  name: 'TextWidget',
  attributes: {
    title: 'string',
    content: 'html',
  },
});

scrivito.provideComponent(TextWidget, widget => {
  let title;

  if (widget.get('title').length > 0) {
    title = <scrivito.React.Content tag="b" content={ widget } attribute="title" />;
  }

  return (
    <div>
      { title }
      <scrivito.React.Content content={ widget } attribute="content" />
    </div>
  );
});

scrivito.provideUiConfig(TextWidget, {
  title: 'Text Widget',
  description: 'Simple widget with title and content.',

  attributes: {
    title: {
      title: 'Title',
      description: 'Title of the Widget.',
    },

    content: {
      title: 'Content',
      description: 'Content of the Widget.',
    },
  },
});

class Application extends React.Component {
  render() {
    return (
      <div>
        <scrivito.React.CurrentPage />

        <scrivito.React.NotFoundErrorPage />
        <scrivito.React.InternalErrorPage />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('application'));
