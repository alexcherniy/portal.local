<style>

    #imagelightbox
    {
        position: fixed;
        z-index: 9999;

        -ms-touch-action: none;
        touch-action: none;
    }

    /* ARROWS */

    .imagelightbox-arrow
    {
        width: 3.75em; /* 60 */
        height: 7.5em; /* 120 */
        background-color: #444;
        background-color: rgba( 0, 0, 0, .5 );
        vertical-align: middle;
        display: none;
        position: fixed;
        z-index: 10001;
        top: 50%;
        margin-top: -3.75em; /* 60 */
    }
    .imagelightbox-arrow:hover,
    .imagelightbox-arrow:focus	{ background-color: rgba( 0, 0, 0, .75 ); }
    .imagelightbox-arrow:active { background-color: #111; }

    .imagelightbox-arrow-left	{ left: 2.5em; /* 40 */ }
    .imagelightbox-arrow-right	{ right: 2.5em; /* 40 */ }

    .imagelightbox-arrow:before
    {
        width: 0;
        height: 0;
        border: 1em solid transparent;
        content: '';
        display: inline-block;
        margin-bottom: -0.125em; /* 2 */
    }
    .imagelightbox-arrow-left:before
    {
        border-left: none;
        border-right-color: #fff;
        margin-left: -0.313em; /* 5 */
    }
    .imagelightbox-arrow-right:before
    {
        border-right: none;
        border-left-color: #fff;
        margin-right: -0.313em; /* 5 */
    }

    #imagelightbox-loading,
    #imagelightbox-overlay,
    #imagelightbox-close,
    #imagelightbox-caption,
    #imagelightbox-nav,
    .imagelightbox-arrow
    {
        -webkit-animation: fade-in .25s linear;
        animation: fade-in .25s linear;
    }
    @-webkit-keyframes fade-in
    {
        from	{ opacity: 0; }
        to		{ opacity: 1; }
    }
    @keyframes fade-in
    {
        from	{ opacity: 0; }
        to		{ opacity: 1; }
    }

    @media only screen and (max-width: 41.250em) /* 660 */
    {
        #container
        {
            width: 100%;
        }
        #imagelightbox-close
        {
            top: 1.25em; /* 20 */
            right: 1.25em; /* 20 */
        }
        #imagelightbox-nav
        {
            bottom: 1.25em; /* 20 */
        }

        .imagelightbox-arrow
        {
            width: 2.5em; /* 40 */
            height: 3.75em; /* 60 */
            margin-top: -2.75em; /* 30 */
        }
        .imagelightbox-arrow-left	{ left: 1.25em; /* 20 */ }
        .imagelightbox-arrow-right	{ right: 1.25em; /* 20 */ }
    }

    @media only screen and (max-width: 20em) /* 320 */
    {
        .imagelightbox-arrow-left	{ left: 0; }
        .imagelightbox-arrow-right	{ right: 0; }
    }



</style>

<script>
   /* $( function()
    {
        $( 'a' ).imageLightbox();
    });*/
    //	WITH ARROWS & ACTIVITY INDICATION
   $( function()
   {

       // ACTIVITY INDICATOR

       activityIndicatorOn = function()
       {
           $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
       },
           activityIndicatorOff = function()
           {
               $( '#imagelightbox-loading' ).remove();
           },

       arrowsOn = function( instance, selector )
       {
           var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

           $arrows.appendTo( 'body' );

           $arrows.on( 'click touchend', function( e )
           {
               e.preventDefault();

               var $this	= $( this ),
                   $target	= $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
                   index	= $target.index( selector );

               if( $this.hasClass( 'imagelightbox-arrow-left' ) )
               {
                   index = index - 1;
                   if( !$( selector ).eq( index ).length )
                       index = $( selector ).length;
               }
               else
               {
                   index = index + 1;
                   if( !$( selector ).eq( index ).length )
                       index = 0;
               }

               instance.switchImageLightbox( index );
               return false;
           });
       },
           arrowsOff = function()
           {
               $( '.imagelightbox-arrow' ).remove();
           };



    var selectorG = 'a[data-imagelightbox="g"]';
    var instanceG = $( selectorG ).imageLightbox(
        {
            onStart:		function(){ arrowsOn( instanceG, selectorG ); },
            onEnd:			function(){ arrowsOff(); activityIndicatorOff(); },
            onLoadStart: 	function(){ activityIndicatorOn(); },
            onLoadEnd:	 	function(){ $( '.imagelightbox-arrow' ).css( 'display', 'block' ); activityIndicatorOff(); }
        });
       });

</script>

<a href="../../images/slide1.jpg" data-imagelightbox="g">ССЫЛКА</a>
<a href="../../images/slide2.jpg" data-imagelightbox="g">ССЫЛКА</a>
<a href="../../images/slide3.jpg" data-imagelightbox="g">ССЫЛКА</a>
<div class="row">
   <!-- <div class="col-md-4">
        <img src="../../images/slide1.jpg" id="imagelightbox" />
    </div>
    <div class="col-md-4">
        <img src="../../images/slide2.jpg" id="imagelightbox" />
    </div>
    <div class="col-md-4">
        <img src="../../images/slide3.jpg" id="imagelightbox" />
    </div>-->
</div>



