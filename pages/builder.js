// pages/builder.js

import React, { useEffect, useState } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';

builder.init('97398c734d724ad0b3d105b8c6ce69b2');

export default function BuilderPage() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get('page', {
          url: window.location.pathname,
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      if (content?.data.title) {
        document.title = content.data.title;
      }
    }

    fetchContent();
  }, [window.location.pathname]);

  if (notFound && !isPreviewingInBuilder) {
    return <FourOhFour />;
  }

  return (
    <>
      <BuilderComponent model="page" content={content} />
    </>
  );
}
