# インストール済みのパッケージをアップデート
sudo yum -y update



# よく使うコマンドをインストール
sudo yum -y install wget unzip yum-utils mlocate
sudo updatedb
# Laravelのファイルで解凍コマンド必要な必要なためインストール
sudo yum -y install zip unzip
#php7.1とphp moduleのインストール
sudo yum install -y --enablerepo=remi,remi-php71 php-common php-pdo php-cli php-devel php-mysqlnd php-mbstring php-gd php-intl php-xml php-bcmat



# epel, remi リポジトリを追加して有効化
sudo yum -y install epel-release
sudo rpm -ivh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
sudo yum-config-manager --enable epel remi
sudo yum repolist all
