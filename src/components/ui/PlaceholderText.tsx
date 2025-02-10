import React from 'react';

const paragraphs = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet nunc dui, vel malesuada ex tincidunt consectetur. Morbi eleifend nisl eros, ac rhoncus elit dapibus sit amet. Praesent in fermentum mi, sed congue massa. Cras volutpat sagittis posuere. Praesent at mollis ligula, sit amet convallis nulla. Proin sapien odio, tempus ut rhoncus in, lobortis vel nibh. Praesent risus dui, placerat sed nibh sed, accumsan blandit nulla. Curabitur risus tellus, vehicula at sollicitudin a, congue non nisi. Nam iaculis erat sed est scelerisque, et pharetra dui placerat. Phasellus sed erat justo. Sed lacus justo, blandit sed urna mollis, cursus ultrices ante. Ut ac aliquam neque. Cras dignissim ligula elit, scelerisque pharetra ligula luctus nec. Suspendisse nec pharetra dolor. Vivamus posuere fermentum augue, vitae feugiat nunc interdum in.`,
  `Nam vitae suscipit ligula. Sed laoreet in lacus id pellentesque. Nulla tristique urna eu ornare rhoncus. Nullam elementum, tellus quis pulvinar molestie, mi ipsum finibus massa, non dictum massa sem non quam. Vestibulum sit amet eros leo. Nulla vestibulum dolor dictum ligula scelerisque, sed feugiat mi cursus. Etiam purus odio, laoreet et erat iaculis, interdum mollis nisl.`,
  `Duis nec erat ut tellus iaculis sollicitudin. Etiam mi odio, mollis in vestibulum in, semper a tellus. Cras est lorem, bibendum ac feugiat sit amet, mattis ut massa. Etiam porttitor pellentesque metus sed egestas. Donec maximus tortor a arcu ullamcorper, rhoncus convallis erat commodo. Nulla pretium fermentum vehicula. Vivamus elementum neque nisi, sed tincidunt libero egestas in. Fusce fermentum, quam non fermentum varius, lectus quam imperdiet eros, lobortis posuere est ante sed risus. Praesent placerat nibh at mauris maximus porta. Phasellus fringilla tellus sit amet varius dapibus.`,
  `Nullam varius nisl pellentesque, tincidunt eros eget, semper eros. Donec et mauris arcu. Phasellus venenatis nulla sed urna elementum, sit amet vehicula ligula imperdiet. Phasellus iaculis orci quis laoreet dignissim. Quisque efficitur varius leo, non pulvinar ligula auctor et. Duis sollicitudin sit amet eros sit amet tincidunt. Etiam accumsan, leo in blandit eleifend, ipsum nulla cursus purus, blandit hendrerit dui purus ut eros. Maecenas hendrerit orci ut sagittis euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas euismod purus vel elit aliquet porta. Nunc rutrum at erat id eleifend. Proin suscipit maximus iaculis. Praesent vulputate lectus a odio euismod feugiat. Nullam rhoncus et dui nec accumsan. Suspendisse aliquam feugiat scelerisque. Curabitur pulvinar tempor hendrerit.`,
  `Vivamus odio elit, rhoncus non ultrices id, pulvinar venenatis est. Nunc eget elit a diam efficitur eleifend. Etiam nec laoreet nibh, ac interdum dui. Donec tincidunt efficitur neque et pharetra. Aenean commodo pharetra urna, eget porttitor mi pulvinar eget. Curabitur egestas gravida erat a posuere. Fusce gravida ultricies lacus non rutrum. Morbi id nisl nisi.`,
  `Duis nec erat ut tellus iaculis sollicitudin. Etiam mi odio, mollis in vestibulum in, semper a tellus. Cras est lorem, bibendum ac feugiat sit amet, mattis ut massa. Etiam porttitor pellentesque metus sed egestas. Donec maximus tortor a arcu ullamcorper, rhoncus convallis erat commodo. Nulla pretium fermentum vehicula. Vivamus elementum neque nisi, sed tincidunt libero egestas in. Fusce fermentum, quam non fermentum varius, lectus quam imperdiet eros, lobortis posuere est ante sed risus. Praesent placerat nibh at mauris maximus porta. Phasellus fringilla tellus sit amet varius dapibus.`,
  `Nam vitae suscipit ligula. Sed laoreet in lacus id pellentesque. Nulla tristique urna eu ornare rhoncus. Nullam elementum, tellus quis pulvinar molestie, mi ipsum finibus massa, non dictum massa sem non quam. Vestibulum sit amet eros leo. Nulla vestibulum dolor dictum ligula scelerisque, sed feugiat mi cursus. Etiam purus odio, laoreet et erat iaculis, interdum mollis nisl.`,
];
const PlaceholderText = () => {
  const shuffledParagraphs = [...paragraphs].sort(() => Math.random() - 0.5);

  return (
    <div className="space-y-2">
      {shuffledParagraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
export default PlaceholderText;
