import React from 'react';
import ImageHeader from '../../components/image-header/image-header';
import Video from '../../components/video-player/video';
import Hint from '../../components/hint/hint';
import Form from '../../components/form/form';

interface SaveAsISaveProps {
  imgPath: string;
  vidPath: string;
  width: string;
  height: string;
}

function SaveAsISave(props: SaveAsISaveProps) {
  return (
    <div>
      <ImageHeader path={props.imgPath} />
      <Video path={props.vidPath} width="700px" height="400px" />
      <Hint path="https://media.discordapp.net/attachments/825881406017241178/1052735595601997924/hint.png" />
      <Form />
    </div>
  );
}

export default SaveAsISave;
