echo 'Shipping React Build to...';
echo '~/Sites/dev/utk-libraries/wp-content/themes/utk_lib_wp_theme/resources/assets/react/bookplate';

rsync -av --delete dist/ ~/Sites/dev/utk-libraries/wp-content/themes/utk_lib_wp_theme/resources/assets/react/bookplate

cd ~/Sites/dev/utk-libraries/wp-content/themes/utk_lib_wp_theme/;
yarn build;
cd ~/Sites/dev/react/utk_lib_bookplate;

echo 'Shipped Complete';
