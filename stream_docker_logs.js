import Docker from 'dockerode';
const docker = new Docker();

const containerName = 'jaguar-payment-service-test';
const imageName = 'jaguar-payment-service-test';

// Define container options
const containerOpts = {
  Image: imageName,
  name: containerName,
  AttachStdout: true,
  AttachStderr: true,
  Tty: true,
};

async function createAndStartContainer() {
  try {
    // Create the container
    const container = await docker.createContainer(containerOpts);
    console.log(`Container '${containerName}' created`);

    // Start the container
    await container.start();
    console.log(`Container '${containerName}' started`);

    // Stream container logs
    const stream = await container.logs({
      follow: true,
      stdout: true,
      stderr: true,
    });

    // Log the stream of data to the console
    stream.on('data', function (chunk) {
      console.log(chunk.toString());
    });

    // When the stream ends, remove the container
    stream.on('end', async function () {
      const containerInfo = await container.inspect();
      console.log(
        `Container '${containerName}' exited with code ${containerInfo.State.ExitCode}`
      );

      // Remove the container
      await container.remove();
      console.log(`Container '${containerName}' removed`);
    });
  } catch (err) {
    console.error(err);
  }
}

createAndStartContainer();
