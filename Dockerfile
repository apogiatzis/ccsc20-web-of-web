FROM buildkite/puppeteer:v1.15.0
RUN apt-get update && npm i express cors

COPY src/scripts/run.sh /
COPY src/admin.js /
COPY src/api-server.js /
COPY src/flag-server.js /
ADD src/build.tar.gz /

RUN chmod +x /run.sh

ENTRYPOINT ["/run.sh"]
