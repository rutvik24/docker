FROM adminer:latest

# MAINTAINER Patrick Artounian <partounian@gmail.com>

USER root

# Store PHP Configs at /usr/local/etc/php/conf.d
RUN echo "upload_max_filesize = 500M" >> /etc/php/7.4/cli/conf.d/0_upload_large_dumps.ini \
    && echo "post_max_size = 500M"       >> /etc/php/7.4/cli/conf.d/0_upload_large_dumps.ini \
    && echo "memory_limit = -1"           >> /etc/php/7.4/cli/conf.d/0_upload_large_dumps.ini \
    && echo "max_execution_time = 0"      >> /etc/php/7.4/cli/conf.d/0_upload_large_dumps.ini

RUN echo "upload_max_filesize = 500M" >> /etc/php/7.4/fpm/conf.d/0_upload_large_dumps.ini \
    && echo "post_max_size = 500M"       >> /etc/php/7.4/fpm/conf.d/0_upload_large_dumps.ini \
    && echo "memory_limit = -1"           >> /etc/php/7.4/fpm/conf.d/0_upload_large_dumps.ini \
    && echo "max_execution_time = 0"      >> /etc/php/7.4/fpm/conf.d/0_upload_large_dumps.ini

# Add volume for sessions to allow session persistence
VOLUME /sessions

USER adminer

# We expose Adminer on port 8080 (Adminer's default)
EXPOSE 8080